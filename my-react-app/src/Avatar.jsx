import { getImageUrl } from "./util.js";

export default function Avatar({ person, size }) {
  return (
    <img
      src={getImageUrl(person)}
      alt={person.name}
      height={size}
      width={size}
    />
  );
}
