import React from "react";
import articleContent from "./article-content"
import {Link} from 'react-router-dom'

const ArticlesList = () => {
    return(
    <div>
        <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
            Articles
        </h1>
        <div className="container py-4 mx-auto">
            <div className="flex flex-wrap -m-4">
                {articleContent.map((article, index) => (
                    <div key={index} className="p-4 md:w-1/2">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <Link to={`/article/${article.name}`}>
                               <img className="lg:h-48 md:h-36 w-full object-cover object-center" src=
                               {article.thumbnail /** display photos as a link to get to a specific blog when clicking on it according to the path */}
                               alt ='blog'/>
                            </Link>
                            <div className="pd-6">
                                <Link key={index} to={`/article/${article.name}`}>
                                  <h3 className="text-lg font-meduim text-gray-900 mb-3 text-center">{article.title /** displays the title of the article under the picture dedicated to it */}</h3> 
                                </Link>
                                <p className="leading-relaxed m-3 my-auto ">
                                    {article.content[0].substring(0,110)/**displays a beginnig of the text under the article name
                                    so that you can have an idea on what it talks about */}... 
                                </p>
                                <div className="flex item-center flex-wrap">
                                    <Link className="text-indigo-500 inline-flex item-center ml-2 " to={`/article/${article.name}` /**displays learn more as a clickable link in
                                    such a way that when you click it you'll directly directed to the article according to his name */}>
                                       Learn more
                                    </Link>
                                </div>   
                            </div>    
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
};

export default ArticlesList;