function copyMsg(obj, data){
    if (Boolean(data)){
        copyToClipboard(data);
        // obj.innerText = "Copied"
        setTimeout(function(){ obj.innerText = "Copy" }, 1000)
        obj.innerHTML = "<svg width='16' height='16' viewBox='0 0 16 16' ><g transform='scale(0.015625 0.015625)'><path fill='white' d='M864 128l-480 480-224-224-160 160 384 384 640-640z'></path></g></svg>"
        setTimeout(function(){ obj.innerHTML = "<svg width='16' height='16' viewBox='0 0 16 16' style=''><g transform='scale(0.015625 0.015625)'><path fill='white' d='M640 256v-256h-448l-192 192v576h384v256h640v-768h-384zM192 90.51v101.49h-101.49l101.49-101.49zM64 704v-448h192v-192h320v192l-192 192v256h-320zM576 346.51v101.49h-101.49l101.49-101.49zM960 960h-512v-448h192v-192h320v640z'></path></g></svg>" }, 1000)
    }
}


function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text);

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}
