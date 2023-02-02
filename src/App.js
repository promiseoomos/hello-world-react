import React from 'react';
import './App.css';

function App() {

    const hobbies = [
      {
        name : "Praying",
        description : "Praying is an art of communing with God.",
        mentor : "Pastor Monday Omokaro",
        image : "https://i.swncdn.com/media/800w/via/19310-gettyimages-1155686843-madesutaeyeemjpeg.webp",
        time : "Every watch"
      },
      {
        name : "Singing",
        description : "Singing is an art of articulating sounds from your vocal cords",
        mentor : "Theophilus sunday",
        image : "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/28707/article_full%401x.jpg",
        time : "All through the day"
      },
      {
        name : "Study",
        description : "Study is making research on topics or objects of learning",
        mentor : "Pastor WF Kumuyi",
        image : "http://canada1.national.edu/wp-content/uploads/2018/07/iStock-639710652-1080x675.jpg",
        time : "Morning and Evening"
      }
    ]

    return (
      <div className='px-3 py-3'>
        <h1 className='text-3xl underline'>My Hobbies</h1>
        <div className="list-disc flex flex-wrap justify-start">
          {
            hobbies.map((hobby, index) => (
                <div key={index} className="mt-3 w-1/3" >
                  <h1 className='text-lg font-bold'>{hobby.name}</h1>
                  <p className=''>{ hobby.description }</p>
                  <img src={hobby.image} alt={hobby.name} className="w-[400px] h-[200px] rounded-lg mt-5" />
                </div>
                
            ))
          }
        </div>
        
      </div>
    )

}

export default App;
