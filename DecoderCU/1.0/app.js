const info=document.querySelector("#info")
const option_d=document.querySelector('#type_d');
const input_d=document.querySelector('#input_d');
const option_e=document.querySelector('#type_e');
const input_e=document.querySelector('#input_e');
info.setAttribute("class","terminal");
info.innerHTML=`<p class="terminal-user">root@IP4💀~$:</p>`;

const decode=document.querySelector("#btn-decode").addEventListener('click', ()=>{
	if(option_d.value==="Base64"){
		info.innerHTML=`<p class="terminal-user">root@IP4💀~$: ./base64 -d file</p>`+atob(input_d.value);
	}else if(option_d.value==="URL"){
		info.innerHTML=`<p class="terminal-user">root@IP4💀~$: ./decodeURI file</p>`+decodeURIComponent(input_d.value);
	}else{
		info.innerHTML=`<p class="terminal-user">root@IP4💀~$: ./binary -d file</p><p>Command not found</p>`;
	}
});

const encode=document.querySelector("#btn-encode").addEventListener('click', ()=>{
	if(option_e.value==="Base64"){
		info.innerHTML=`<p class="terminal-user">root@IP4💀~$: ./base64 -e file</p>`+btoa(input_e.value);
	}else if(option_e.value==="URL"){
		info.innerHTML=`<p class="terminal-user">root@IP4💀~$: ./encodeURI file</p>`+encodeURIComponent(input_e.value);
	}else{
		info.innerHTML=`<p class="terminal-user">root@IP4💀~$: ./binary -e file</p><p>Command not found</p>`;
	}
});

const about=document.querySelector("#btn-about").addEventListener('click', ()=>{
	info.innerHTML=`
		<p class="terminal-user">root@IP4💀~$: cat /etc/about</p>
		<p>
			Autor: InfernoidPl4y<br>
			Version: 1.0<br>
			Web: decodecu.pythonanywhere.com
			GitHub: github.com/InfernoidPl4y
		</p>
	`;
});