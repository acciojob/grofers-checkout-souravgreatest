const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices=document.querySelectorAll(".price");
	let sum=0;
	prices.forEach((price)=>{
		sum+=parseFloat(price.textContent);
	})
	const table=document.querySelector('table')
	const new_row=document.createElement('tr')
	new_row.setAttribute("id","ans");
	// const total_sum=document.createElement('td')
	// total_sum.textContent='Total Price';
	// new_row.appendChild(total_sum);
	const total_price=document.createElement('td')
	total_price.setAttribute("id","ans");
	total_price.setAttribute("colspan","2");
	// total_price.style.cssText=" text-align:center";
	total_price.textContent=sum;
	new_row.appendChild(total_price)
	table.appendChild(new_row);  
	
};

getSumBtn.addEventListener("click", getSum);

