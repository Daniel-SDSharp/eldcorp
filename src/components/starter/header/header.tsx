import { component$ } from '@builder.io/qwik';
import styles from './header.module.css';

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={['container', styles.wrapper] + " absolute flex items-center w-full justify-between !px-[70px]"}>
        <div class={styles.logo}>
          <a href="/" title="qwik">
            <img height={50} width={143} src="public/logo.png" />
          </a>
        </div>
        <ul>
          <li>
            <a class="text-[14px] font-bold" href="https://qwik.builder.io/docs/components/overview/" target="_blank">
              About Us
            </a>
          </li>
          <li>
            <a class="text-[14px] font-bold" href="https://qwik.builder.io/examples/introduction/hello-world/" target="_blank">
              Our Work
            </a>
          </li>
          <li>
            <a class="text-[14px] font-bold" href="https://qwik.builder.io/tutorial/welcome/overview/" target="_blank">
             Services 
            </a>
          </li>
          <li>
            <a class="text-[14px] font-bold" href="https://qwik.builder.io/tutorial/welcome/overview/" target="_blank">
              Contacts
            </a>
          </li>
          <li>
            <a class="text-[14px] font-bold" href="https://qwik.builder.io/tutorial/welcome/overview/" target="_blank">
             Our Partners 
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
