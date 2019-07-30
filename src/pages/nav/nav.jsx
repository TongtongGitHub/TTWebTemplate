import React, { useState, useEffect } from 'react';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

export default function Nav() {
    const [navData, setNavData] = useState([]);
    useEffect(() => {
        $.ajax({
            url: "https://api.github.com/repos/TongtongGitHub/TongtongBlog/issues?creator=TongtongGitHub",
            type: "GET",
            dataType: "json",
            data: { 
            },
            success: function (data) {
                if (data) {
                    console.log(data);
                    setNavData(data);
                } else {
                }
            },
            error: function () {
                console.log("error")
            }
        });
    }, []);
    let result;
    if (navData.length === 0) {
        result = (<div className='nav-loading'>
            <FontAwesomeIcon icon={faSpinner} />
        </div>)
    } else {
        result = (
            <div>
                {
                    navData.map(item => {
                        return (
                            <div key={item.number}>
                                <Link to={'/article/' + item.number}>{item.title}</Link>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
    return (
        <div className='nav'>
            {result}
        </div>
    );
}