import React, { Component } from 'react';
import styles from './company.module.css';
import Cdata from '../component/array/array';

export default function Company() {
	return (
		<>
			
				{Cdata.map((value,id)=>{
					return(
						<>
						<div className={styles.boxs}>
							<div className={styles.container}>
								<div className={styles.flex}>
									<div>{value.cName}</div>
									<div><img src={value.image} alt="img" /></div>
								</div>
								<div className={styles.usd}><b>{value.cPrice}</b></div>
							</div>
						</div>
					</>
					)
				})}
				
			
		</>
	);
}
