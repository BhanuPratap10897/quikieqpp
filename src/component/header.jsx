import React, { Component } from 'react';
import style from './header.module.css';

export default function Header() {
	return (
		<>
            <div className={style.headerbox}>
			    <span><img className={style.img} src='/logo.png' alt="Logo" /></span>
			
		    </div>
        </>
    )
}