const YoutubeListItem = ({ data }) => {
  return (
    <li className="item" key={data.id}>
      <div>
        <b>
          <a href={data.link}>{data.title}</a>
        </b>
        <p>{data.description}</p>
      </div>
      <ul className="meta">
        <li>
          By: <a href={data.author.ref}>{data.author.name}</a>
        </li>
        <li>Views: {data.views}</li>
        <li>Duration: {data.duration}</li>
        <li>Uploaded: {data.uploaded_at}</li>
      </ul>
      <img alt="" src={data.thumbnail} />
    </li>
  );
};
export default YoutubeListItem;
