import React from "react";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

const SocialMediaTask = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:00pm"
                    content="Cool Post"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Today at 3:00pm"
                    content="Nice Post"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 11:10am"
                    content="Lol"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jo"
                    timeAgo="Today at 4:00am"
                    content="Hello World"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

export default SocialMediaTask;