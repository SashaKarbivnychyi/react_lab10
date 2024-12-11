export default function MenuItem(props) {
    return props.url ? (
      <li>
        <a href={props.url} target={props.target}>
          {props.text}
        </a>
      </li>
    ) : (
      <li>
        <span>{props.text}</span>
      </li>
    );
  }