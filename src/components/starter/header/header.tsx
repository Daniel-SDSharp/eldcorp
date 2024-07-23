import { component$ } from '@builder.io/qwik';
import styles from './header.module.css';

export default component$(() => {
  return (
    <header class={styles.header + " relative z-[999999] "}>
      <div class={['container', styles.wrapper] + "  absolute flex items-center w-full justify-between !px-[70px]"}>
        <div class={styles.logo}>
          <a href="/" title="qwik">
            <img height={50} width={170} src="public/logo.png" />
          </a>
        </div>
        <ul>
          <li>
            <a class="text-[14px] font-bold" href="" target="_blank">
              About Us
            </a>
          </li>
          <li>
            <a class="text-[14px] font-bold" href="" target="_blank">
              Our Work
            </a>
          </li>
          <li>
            <a class="text-[14px] font-bold" href="" target="_blank">
              Services
            </a>
          </li>
          <li>
            <a class="text-[14px] font-bold" href="" target="_blank">
              Contacts
            </a>
          </li>
          <li>
            <a class="text-[14px] font-bold" href="" target="_blank">
              Our Partners
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
