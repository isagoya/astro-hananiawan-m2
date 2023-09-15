	//フォントサイズ変更

	 // ページ内から`alert`クラスを持つすべてのボタンを探す。
	 const buttons = document.querySelectorAll('button.change-fs');

	 // 各ボタンがクリックされたときのハンドリング
	 buttons.forEach((button) => {
	   button.addEventListener('click', () => {
		//  alert('Button was clicked!');
		let size = button.dataset.fs;
		//bodyタグにサイズを設定
		document.querySelector("body").style.fontSize = size + "rem";
		//セッションに保存
		sessionStorage.setItem('fontSize', size);

		//ボタンにactiveのclassを追加 or 削除
		let buttons = document.querySelectorAll('[data-fs]');
		for(let i = buttons.length; i--;){
			if(buttons[i].dataset.fs == size){
				buttons[i].classList.add("active");
			} else{
				buttons[i].classList.remove("active");
			}
		}
		
	   });
	 });
	 
	function changeFont(size){
		//bodyタグにサイズを設定
		document.querySelector("body").style.fontSize = size + "rem";
		//セッションに保存
		sessionStorage.setItem('fontSize', size);

		//ボタンにactiveのclassを追加 or 削除
		let buttons = document.querySelectorAll('[data-fs]');
		for(let i = buttons.length; i--;){
			if(buttons[i].dataset.fs == size){
				buttons[i].classList.add("active");
			} else{
				buttons[i].classList.remove("active");
			}
		}
	}

	//初期化
	let size = '1.6';

	if(sessionStorage.getItem('fontSize')){
		//フォントサイズがセッションに保存されていれば上書き
		size = sessionStorage.getItem('fontSize');
	}
	// change-fs(size);