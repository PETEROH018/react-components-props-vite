export default function About({blogData}){

    return (
        <aside>
          <img src={blogData.image || "https://via.placeholder.com/215"} alt="blog logo" />
          <p>{blogData.about}</p>
        </aside>
    )

}