import React, { useEffect, useState } from "react";
import Practice01Comment from "./Practice01Comment";

function Practice01CommentApp() {
    //     const comment = {
    //         author: "John Doe",
    //         text: "이게 맞나?!",
    //         regdate: new Date 
    //     };
    //     return (
    //         <div className="Practice01CommentApp">
    //             <Practice01Comment
    //                 author = {comment.author}
    //                 text = {comment.text}
    //                 regdate = {comment.regdate}
    //                 />
    //         </div>
    //     );
    // }
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(response => response.json())
            .then(data => {
                const transformData = data.slice(0, 10).map(item => ({
                    author: item.name,
                    text: item.body,
                    regdate: new Date()
                }));
                setComments(transformData);
            })
            .catch(error => console.error("Error Fetching Comments:", error));
    }, []);

    return (
        <div className="Practice01CommentApp">
            {comments.map((comment, index) => (
                <Practice01Comment
                    key={index}
                    author={comment.author}
                    text={comment.text}
                    regdate={comment.regdate}
                />
            ))}
        </div>
    );
}

export default Practice01CommentApp;