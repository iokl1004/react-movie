import React, { useState } from "react";
import { Link } from "react-router-dom"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { listPageReLoading, focusNav } from "../atom/Atoms";
import styles from "./Nav.module.css";
import navList from "./NavList";

function Nav() {

    const pageReLoading = useSetRecoilState(listPageReLoading);
    const [focusPath, setFocusPath] = useRecoilState(focusNav);

    const optionOnClick = () => {
        pageReLoading(true);
    }

    return (
        <div>
            <nav className={styles.container}>
                <div className={styles.title}>
                    <a href="/react-movie">
                        <strong>POPFLEX</strong>
                    </a>
                </div>
                <ul className={styles.option__list}>
                    {navList.map(({ title, path }) => {
                        return (
                            <li>
                                <Link to={`/page/${path}/1`}
                                    onClick={focusPath !== path ? optionOnClick : null}
                                >{title}</Link>
                            </li>
                        )
                    })}
                </ul>
                <ul className={styles.icon__list}>
                    <li>
                        <a href="https://twitter.com/?lang=ko" target="_blank">
                            <i class="fab fa-twitter-square" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/" target="_blank">
                            <i class="fab fa-instagram" />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )

}

export default Nav;