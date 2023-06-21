import React from "react";
import './Question.css'

const Question=()=>{



    return(

        <div className="ques">
            <h2>How react works?</h2>
            <p>
            React is a declarative, effective, and configurable JavaScript library for building user interfaces. React does not commit state changes sequentially if there are many of them. React, on the other hand, traverses its virtual DOM, compiles a list of the changes that must be made to the real DOM, and then executes each of those changes in a single process. React does batch updates, to put it another way.
            </p>

            <h2>Difference between props and state?</h2>
            <p>
            While states are used to manage data, props are used to pass data around. The read-only nature of props data prevents components that receive it from the outside from altering it. While private (not accessible from the outside), state data is changeable by its own component. The main distinction between props and state is that whereas props are external and controlled by whatever renders the component, state is internal and controlled by the component.
            </p>


        </div>

    );
}
export default Question;