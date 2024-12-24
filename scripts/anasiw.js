function directMode() {
    let textarea = document.getElementById("ansa").value;
    let lastchar = textarea.charAt(textarea.length - 1);
    let lastsecondchar = textarea.charAt(textarea.length - 2);
    if (lastchar == '=') {
        switch (lastsecondchar) {
            case 'c':
                document.getElementById("ansa").value = textarea.substring(0, textarea.length - 2) + 'č';
                break;
            case 'd':
                document.getElementById("ansa").value = textarea.substring(0, textarea.length - 2) + 'ḍ';
                break;
            case 'g':
                document.getElementById("ansa").value = textarea.substring(0, textarea.length - 2) + 'ǧ';
                break;
            case 'h':
                document.getElementById("ansa").value = textarea.substring(0, textarea.length - 2) + 'ḥ';
                break;
            case 'r':
                document.getElementById("ansa").value = textarea.substring(0, textarea.length - 2) + 'ṛ';
                break;
            case 's':
                document.getElementById("ansa").value = textarea.substring(0, textarea.length - 2) + 'ṣ';
                break;
            case 't':
                document.getElementById("ansa").value = textarea.substring(0, textarea.length - 2) + 'ṭ';
                break;
            case 'z':
                document.getElementById("ansa").value = textarea.substring(0, textarea.length - 2) + 'ẓ';
                break;
            case 'e':
                document.getElementById("ansa").value = textarea.substring(0, textarea.length - 2) + 'ɛ';
                break;
            case 'y':
                document.getElementById("ansa").value = textarea.substring(0, textarea.length - 2) + 'ɣ';
                break;
        }
    }
}