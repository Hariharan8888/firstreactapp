import React from "react";
import Card from "./Card";

const Cardlist = function ({ Robot }) {
    const cardcomponent = Robot.map((user, i) => {
        return (<Card key={i} Id={Robot[i].Id} Name={Robot[i].Name} email={Robot[i].email} />);
    });

    return (
        <div>
            {cardcomponent}
        </div>
    );
}

export default Cardlist;