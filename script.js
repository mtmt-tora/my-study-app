// 1. 画面上の要素（ボタンとテキスト）をJSで捕まえる
const btn = document.getElementById('complete-btn');
const statusText = document.getElementById('status');

// 2. ボタンがクリックされた時の動きを決める
btn.addEventListener('click', () => {
    // 文字を書き換える
    statusText.innerText = "ステータス：✅ 完了！";
    statusText.style.color = "#34c759"; // Appleのグリーン
    
    // ボタンを消す、または無効化する
    btn.disabled = true;
    btn.innerText = "お疲れ様でした！";
    
    // お祝いのメッセージを出す
    alert("素晴らしい！AIがあなたの進捗を分析し始めました。");
});
