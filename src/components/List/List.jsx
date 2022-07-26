import styles from './List.css';

export default function List() {
  return (
    <div className={styles.List}>
      <h1>This is a List Page</h1>
      <br />
      <li>first item</li>
      <li>second item</li>
      <li>third item</li>
    </div>
  );
}
