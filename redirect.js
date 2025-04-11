// 移动设备检测和重定向脚本
(function() {
    // 检测是否为移动设备
    function isMobileDevice() {
        return (window.innerWidth <= 768) || 
               /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    
    // 获取当前页面文件名
    function getCurrentPage() {
        var path = window.location.pathname;
        var page = path.split("/").pop();
        return page;
    }
    
    // 如果是移动设备且当前不在移动页面，则重定向
    if (isMobileDevice() && getCurrentPage() !== "pension-mobile.html") {
        window.location.href = "pension-mobile.html";
    }
    
    // 如果是桌面设备且当前在移动页面，则重定向
    if (!isMobileDevice() && getCurrentPage() === "pension-mobile.html") {
        window.location.href = "pension-pc.html";
    }
})();
