// import React from 'react'
// import Blogs_props_page from './Blogs_props_page'
import blog1 from "../assets/blog1.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";
import blog5 from "../assets/blog5.png";
import blog6 from "../assets/blog6.png";

// function Blogs_page() {
//   return (
//     <>
//     <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-7 pl-[5%] pr-[5%] py-20 dark:bg-neutral-200">
//     <Blogs_props_page
//     imgsrc={"https://media.cnn.com/api/v1/images/stellar/prod/231104193855-chris-christie.jpg?c=16x9&q=w_800,c_fill"}
//     title="Our Commitment to Excellence"
//     para="At Massie & Company, we believe in delivering the highest quality accounting, tax, and consulting services to our valued clients. Our team of experienced professionals is dedicated to helping our clients solve their present challenges while also identifying opportunities."

//     />
//      <Blogs_props_page
//     imgsrc={blog6}
//     title="Our Commitment to Excellence"
//     para="At Massie & Company, we believe in delivering the highest quality accounting, tax, and consulting services to our valued clients. Our team of experienced professionals is dedicated to helping our clients solve their present challenges while also identifying opportunities."
//     />
//      <Blogs_props_page
//     imgsrc={blog3}
//     title="Our Commitment to Excellence"
//     para="At Massie & Company, we believe in delivering the highest quality accounting, tax, and consulting services to our valued clients. Our team of experienced professionals is dedicated to helping our clients solve their present challenges while also identifying opportunities."
//     />
//      <Blogs_props_page
//     imgsrc={blog4}
//     title="Our Commitment to Excellence"
//     para="At Massie & Company, we believe in delivering the highest quality accounting, tax, and consulting services to our valued clients. Our team of experienced professionals is dedicated to helping our clients solve their present challenges while also identifying opportunities."
//     />
//      <Blogs_props_page
//     imgsrc={blog5}
//     title="Our Commitment to Excellence"
//     para="At Massie & Company, we believe in delivering the highest quality accounting, tax, and consulting services to our valued clients. Our team of experienced professionals is dedicated to helping our clients solve their present challenges while also identifying opportunities."
//     />
//      <Blogs_props_page
//     imgsrc={blog6}
//     title="Our Commitment to Excellence"
//     para="At Massie & company, we believe in delivering the highest quality accounting, tax, and consulting services to our valued clients. Our team of experienced professionals is dedicated to helping our clients solve their present challenges while also identifying opportunities."
//     />
//     </div>
//     </>
//   )
// }

// export default Blogs_page

import React from "react";
import BlogsPropsPage from "./BlogsPropsPage";

class Blogs_page extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    console.log("componentdidmount");
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a39de2be111243719f5ad5d4ff71049c&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
    });
  }
  handlePreviousClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a39de2be111243719f5ad5d4ff71049c&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };
  handleNextClick = async () => {
    console.log("Next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a39de2be111243719f5ad5d4ff71049c&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  render() {
    console.log("render");
    return (
      <>
        <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-7 pl-[5%] pr-[5%] py-20 dark:bg-neutral-200">
          {this.state.articles.map((element) => {
            return (
              <BlogsPropsPage
                imgsrc={element.urlToImage}
                // title={!element.title?element.title.slice(0,44):""}
                title={element.title}
                description={element.description}
                // description={!element.description?element.description.slice(0, 88):""}
                key={element.url}
                newsUrl={element.url}
              />
            );
          })}
        </div>
        <div className="flex justify-between p-20">
          <button
            disabled={this.state.page <= 1}
            onClick={this.handlePreviousClick}
            className=" bg-primary group flex text-white p-3 my-3 font-serif font-normal rounded-lg dark:border-2 dark:border-black dark:text-black dark:bg-neutral-300 dark:font-bold dark:hover:border-primary dark:hover:text-primary"
          >
            &larr;Previous
          </button>
          <button
            onClick={this.handleNextClick}
            className=" bg-primary group flex text-white p-3 my-3 font-serif font-normal rounded-lg dark:border-2 dark:border-black dark:text-black dark:bg-neutral-300 dark:font-bold dark:hover:border-primary dark:hover:text-primary"
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}

export default Blogs_page;
