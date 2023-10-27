import React from "react";
import "./Blog.css";
import BlogCard from "../../components/blogCard/BlogCard";
import { contactPageData } from "../../portfolio";

export default function Blogs(theme) {
  return (
    <div className="main" id="blogs">
      <div className="blog-header">
        <h1 className="blog-header-text">{contactPageData.blogSection.title}</h1>
        <p className="subTitle blog-subtitle">{contactPageData.blogSection.subtitle}</p>
      </div>
      <div className="blog-main-div">
        <div className="blog-text-div">
          {contactPageData.blogSection.blogs.map((blog) => {
            return (
              <BlogCard
                 theme= {theme}
                blog={{
                  url: blog.url,
                  text: blog.text,
                  title: blog.title,
                  date: blog.date,
                  
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
