import React, { useState } from 'react'

const Faq = () => {

    const data = [
        {
            question: "Question 1?",
            answers:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur omnis nam eaque delectus expedita asperiores amet est, molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur omnis nam eaque delectus expedita asperiores amet est, molestias."
        },
        {
            question: "Question 2?",
            answers:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur omnis nam eaque delectus expedita asperiores amet est, molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur omnis nam eaque delectus expedita asperiores amet est, molestias."
        },
        {
            question: "Question 3?",
            answers:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur omnis nam eaque delectus expedita asperiores amet est, molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur omnis nam eaque delectus expedita asperiores amet est, molestias."
        },
        {
            question: "Question 4?",
            answers:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur omnis nam eaque delectus expedita asperiores amet est, molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur omnis nam eaque delectus expedita asperiores amet est, molestias."
        },
        {
            question: "Question 5?",
            answers:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur omnis nam eaque delectus expedita asperiores amet est, molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur omnis nam eaque delectus expedita asperiores amet est, molestias."
        }
    ];

        const [selected, setSelected] = useState(null)

        const handleSelect = (i) => {
            if(selected === i){
                return setSelected(null)
            }
            setSelected(i);
        };

    return (
        <>
            <h1 className='heading'>FAQs</h1>

            <section className="faq">
                <div className="item">
                    {
                        data.map((item, i) => {
                            return (
                                    <div className="wrapper" key={i} >
                                    
                                        <div className="question" onClick={() => handleSelect(i)}> 
                                            <h3>{item.question}</h3>
                                            <img src={require("../../../Assets/arrow1.png")} alt="" className={ selected===i ? 'reverse' : ''} />
                                        </div>

                                        <div className={selected===i ? "answers show" : "answers"}>
                                            <p>{item.answers}</p>
                                        </div>

                                    </div>
                            );
                        })
                    }

                </div>
            </section>
        </>
    );
};

export default Faq