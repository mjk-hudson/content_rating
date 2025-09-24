     import React, { Component } from 'react';
     import './ContentRating.css';

     class ContentRating extends Component {
       constructor() {
         super();
         this.state = {
             likes: 0,
             dislikes: 0,
           handleLike:()=> {
             this.setState((prevState) => ({
                 likes: prevState.likes + 1
               }));
           },
           handleDislike:()=> {
             this.setState((prevState) => ({
                 dislikes: prevState.dislikes + 1
               }));
           }
           };
       }
       render() {
        return (
          <>
            <h1>Text Content Rating</h1>
            <div className='content-rating'>
              <p>
                Sure!<br />
                Here are three paragraphs of text on a general topic:
                The modern workplace is rapidly evolving, driven by advances in technology and changing social dynamics. Remote work and hybrid models have become increasingly common, reshaping how employees communicate, collaborate, and maintain productivity. Companies are now investing in digital tools and platforms that enable seamless interactions across different locations, while also emphasizing the importance of mental well-being and work-life balance. This shift has challenged traditional office norms and encouraged organizations to rethink management strategies, focusing more on outcomes than physical presence.<br />
                At the same time, the rise of artificial intelligence and automation has begun to transform the nature of work itself. Routine tasks are being delegated to machines, freeing humans to focus on more complex, creative, and strategic responsibilities. While this offers opportunities for increased efficiency and innovation, it also raises questions about job displacement, reskilling, and equitable access to emerging technologies. Employees are now expected to develop adaptive skills, embrace lifelong learning, and cultivate digital literacy to remain competitive in a fast-changing labor market.
                <br />
                Cultural and social factors continue to influence how work is experienced and valued. Organizations are increasingly prioritizing diversity, equity, and inclusion, recognizing that varied perspectives drive better problem-solving and innovation. At the same time, globalization has expanded opportunities for collaboration across borders, introducing new challenges in communication, time management, and cross-cultural understanding. Ultimately, the future of work will be shaped by a combination of technology, human creativity, and the capacity of individuals and organizations to adapt to an ever-evolving landscape.
              </p>
              <div className='rating-buttons'>
                <button className="like-button" onClick={this.state.handleLike}>
                  Like ({this.state.likes})
                </button>
                <button className="dislike-button" onClick={this.state.handleDislike}>
                  Dislike ({this.state.dislikes})
                </button>
              </div>
            </div>
          </>
        );     }
     }

     export default ContentRating;