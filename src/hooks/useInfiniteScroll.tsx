import { useEffect, useState, useRef } from "react";

export const useInfiniteScroll = (fetchDataCallback, hasNextPage) => {
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const observer = useRef();
  const lastElementRef = useRef();

  const fetchData = async () => {
    setLoading(true);
    await fetchDataCallback(15, offset);
    setLoading(false);
  };

  useEffect(() => {
    if (hasNextPage) {
      fetchData();
    }
  }, [offset, hasNextPage]);

  useEffect(() => {
    if (loading) return;
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const callback = (entries) => {
      if (entries[0].isIntersecting) {
        setOffset((prevOffset) => prevOffset + 15);
      }
    };

    observer.current = new IntersectionObserver(callback, options);
    if (lastElementRef.current)
      observer.current.observe(lastElementRef.current);

    return () => {
      if (lastElementRef.current)
        observer.current.unobserve(lastElementRef.current);
    };
  }, [loading]);

  return { lastElementRef, loading };
};
