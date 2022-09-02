export default function Profile(props) {
  return (
    <li>
      {props.profile_path !== null ? <img src={`https://image.tmdb.org/t/p/w185/${props.profile_path}`} /> : <img src={`/images/images.png`} />}

      <span>{props.name}</span>
    </li>
  );
}
