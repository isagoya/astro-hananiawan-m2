setTagToContents();

function setTagToContents() {

  // 小見出しと内容を<section>でくくり、内容はグループ化する。

  // https://dubdesign.net/javascript/insertbefore-divtag/
  // '.container-fluid' クラスの子要素である全てのヘッダータグを取得
    //  var headers = document.querySelectorAll('.container-fluid > :is(h1, h2, h3, h4, h5, h6)');  
    // '.container-fluid' クラスの子要素であるh2ヘッダータグを取得
    var headers = document.querySelectorAll('.container-fluid > :is(h1, h2)');  
    //  console.log(headers);

     // 取得した各ヘッダータグについて処理
     headers.forEach(function(header) {

        // <section>タグを作る
        const section = document.createElement('section');
        
        // h2 ヘッダータグの後ろの内容をグループ化する

        // ヘッダータグ名を小文字で取得
        var h_tag = header.nodeName.toLowerCase();  

        // ヘッダーの次の要素を取得
        var nextElement = header.nextElementSibling;  

        // 'group' クラスを持つ div 要素を新規作成
        var group = document.createElement('div');  
        group.classList.add('group', 'col-md-8');  

        // 次の要素が存在し、ヘッダータグと異なる場合はループ
        while (nextElement && nextElement.nodeName.toLowerCase() !== h_tag) {
            // 現在の次の要素の次の要素を一時的に保存
            var next = nextElement.nextElementSibling;  

            // 次の要素を 'group' に追加（移動）
            group.appendChild(nextElement);

            // 保存しておいた次の要素がヘッダータグと同じであればループを抜ける
            if (next && next.nodeName.toLowerCase() === h_tag) {
                break;
            } 
            // 保存しておいた次の要素が存在しない、もしくはヘッダータグであればループを抜ける
            else if (!next || next.matches(':is(h1, h2, h3, h4, h5, h6)')) {
                break;
            }

            // 次の要素を更新
            nextElement = next;  
        }

        // 'group' に要素が存在する場合のみ、ヘッダーの次に挿入
        if (group.children.length > 0) {
            header.parentNode.insertBefore(group, header.nextSibling);
        }

        // h2ヘッダーの前に<section>を作る
        header.before(section);
        // h2タグを<section>内に移動
        section.appendChild(header);
        // 小見出しの内容を<section>内に移動
        section.appendChild(group);
        // <section>にクラスを追加
        section.classList.add('sub-chapter', 'row', 'justify-content-center');
     });

}
