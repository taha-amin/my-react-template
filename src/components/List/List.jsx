import styles from './List.css';

export default function List() {
  return (
    <div className={styles.List}>
      <h1>This is a List Page</h1>
      <ul className={styles.List}>
        {Array.from({ length: 5 }, (x, i) => i + 1).map((n) => (
          <li key={n} className="accent-theme">
            item {n}
          </li>
        ))}
      </ul>
    </div>
  );
}
