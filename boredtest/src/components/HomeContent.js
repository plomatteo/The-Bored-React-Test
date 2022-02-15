import React from "react";

const HomeContent = () => {

    return (
        <div id='main-content' className="container py-5">
            <h1>
                The Bored React Test
            </h1>
            <p className="px-5">
                <h3>Context</h3>

                I'm a bored developer with approximately an almost null social life. I've decided to build a tool to find some interesting activities to do. I know The Bored API project, so I've decided to build a React App using those APIs.


                <h3>The App</h3>
                Starting from a scratch React App, I want to implement the following features.

                <h4>Home Page</h4>

                This is a static page showing the purpose of this project. It's mainly a static page, with 3 main components:
                Header, with menu links
                <ul>
                    <li>Content</li>
                    <li>Footer</li>
                </ul>

                <h4>Search Page</h4>
                This is the first page that will use APIs above. Here I would like to build a Form, asking for some filters to retrieve the right activity for today. Filters are:
                <ul>
                    <li>Activity Type</li>
                    <li>Activity Participants</li>
                </ul>
                Since I'm a bored developer, I want also a fancy random button, that will reset all form filters and gives me a random activity.
                As a result of the search form or the random button, I would like to see the activity in a fancy way, I will demonstrate here all my creativity.
                Favorite Activities
                If I found an awesome activity, I would like to add it to my favorite activities. So, I need:
                <ul>
                    <li>An action to add an activity to my list</li>
                    <li>An always visible top menu item, that shows the number of my favorite activities and the link to access the page</li>
                    <li>A new page that shows me my favorite activities</li>
                </ul>

                Since I know how great is React, I will reuse my fancy Activity component also in this page, to show the list of all my activities (with some adjustments if needed).
            </p>
        </div>
    );
};

export default HomeContent;