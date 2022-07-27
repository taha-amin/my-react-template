import {
  InputControl,
  SelectControl,
  TextAreaControl,
  CheckboxControl,
  FormButton,
  Fieldset,
} from '../Forms/FormControls';
import styles from './About.css';

export default function About() {
  return (
    <section className={styles.About}>
      <form>
        <Fieldset legend="About Form">
          <InputControl
            label="email"
            name="email"
            placeholder="enter your email"
            type="email"
            required
          />

          <InputControl
            className={styles.PasswordControl}
            label="password"
            name="password"
            placeholder="enter your password"
            type="password"
            required
          />
        </Fieldset>

        <SelectControl label="Select your favorite food">
          <option>Select</option>
          <option>Pasta</option>
          <option>Pizza</option>
          <option>Burrito</option>
          <option>Sushi</option>
          <option>Burger</option>
        </SelectControl>

        <CheckboxControl label="Are you Human?" text="Yes" />

        <TextAreaControl label="Bio" placeholder="tell us about yourself" />

        <FormButton>Submit</FormButton>
      </form>
    </section>
  );
}
