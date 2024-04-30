import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Component/Header';
import Footer from "../Component/Footer"

function ShowBlogs() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch blogs from localStorage when component mounts
    const storedBlogs = JSON.parse(localStorage.getItem('blogs'));
    if (storedBlogs) {
      setBlogs(storedBlogs);
    } else {
      // Check if storedBlogs is empty before setting dummy data
      if (storedBlogs === null || storedBlogs.length === 0) {
        setBlogs([
          {
            Name: 'Halloween templates for your students 🎃',
            image: 'https://explaineverything.com/wp-content/uploads/2023/11/halloween-templates_blogpost_cover-1536x768.png',
            content: "Halloween is almost here, and we are happy to share some Halloween-related activities that you can do with your students in the classroom. These templates are free and ready-to-use, and just the kind of spooky fun your autumn classroom needs",
          },
          {
            Name: 'Lost Words',
            image: 'https://explaineverything.com/wp-content/uploads/2023/11/lost-words.png',
            content: "This easy and fun activity helps your students focus and stimulates their creativity. You can ask your students to create their own versions, too, and then share them with the rest of the class. There is no better way to engage students than by having them create their own materials and work on them with colleagues!"         ,
          },
          {
            Name:'Student engagement strategies in the classroom',
            image:"https://explaineverything.com/wp-content/uploads/2023/11/student-engagement-strategies-1536x768.png",
            content:"Student engagement? That’s likely the biggest challenge for teachers nowadays. If you are a teacher or any kind of educator, you’ve probably realized that focusing on more traditional teaching methods may not be the best solution in the long run. Today, we will go through a few student engagement strategies that can really skyrocket your classroom this semester What is student engagement? Student engagement refers to the level of interest, motivation, and active participation that students exhibit towards their learning experiences, be it in a brick-and-mortar classroom, an online course, or any other educational setting. "
          }
        ]);
      }
    }
  }, []);

  const handleClick = () => {
    navigate('/addBlog');
  };

  return (
    <div>
      <Header></Header>
      <h2>Existing Blogs</h2>
      {blogs.length > 0 ? (
        blogs.map((blog, index) => (
          <div key={index}>
            <h3>{blog.Name}</h3>
            <p>{blog.content}</p>
            <img src={blog.image} alt={blog.Name} />
          </div>
        ))
      ) : (
        <p>No blogs found</p>
      )}
      <button onClick={handleClick}>Add More Blogs</button>
      <Footer></Footer>
    </div>
  );
}

export default ShowBlogs;
