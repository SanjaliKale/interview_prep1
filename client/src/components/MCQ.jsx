/* eslint-disable no-unused-vars */
import { Button } from "antd";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const MCQ = () => {
  const [cookies, setCookie] = useCookies(['mcq_topic']);
  const [topic, setTopic] = useState(""); 
  const navigate = useNavigate();

  

  useEffect(() => {
    if (cookies.mcq_topic) {
      setTopic(cookies.mcq_topic.subject);
    }
  }, [cookies.mcq_topic]);

  const handleTestStart = () => {
    navigate("/test");
  };

  return (
    <div className='overflow-x-hidden'>
    <div className="m-10 p-10 mt-52 bg-main text-white">
      <p className="text-xl md:text-2xl lg:text-3xl font-serif font-bold">
        MCQ test for {topic}
      </p>
      <Button
        className="mt-10 p-5 font-serif font-bold text-lg md:text-xl lg:text-2xl"
        onClick={handleTestStart}
      >
        Start MCQ Test
      </Button>
    </div>
   </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default MCQ;
