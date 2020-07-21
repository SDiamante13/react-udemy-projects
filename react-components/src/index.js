import React from 'react';
import ReactDOM from 'react-dom';
import Comment from "./components/Comment";
import ApprovalCard from "./components/ApprovalCard";
import faker from 'faker';

const App = () => {
    return (
      <div className="ui container comments">
          <ApprovalCard>
              <Comment author='Sam' createdAt='Today at 6:00 PM' commentBody='Hi there!' avatar={faker.image.avatar()}/>
          </ApprovalCard>
          <ApprovalCard>
              <Comment author='Paul' createdAt='Today at 6:10 PM' commentBody='How are you?' avatar={faker.image.avatar()}/>
          </ApprovalCard>
          <ApprovalCard>
              <Comment author='Sam' createdAt='Today at 6:13 PM' commentBody='Not too bad' avatar={faker.image.avatar()}/>
          </ApprovalCard>
      </div>
    );

};

ReactDOM.render(<App />, document.querySelector("#root"))

