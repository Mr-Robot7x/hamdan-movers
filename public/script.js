var url =
  "https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?47978";
var s = document.createElement("script");
s.type = "text/javascript";
s.async = true;
s.src = url;
var options = {
  enabled: true,
  chatButtonSetting: {
    backgroundColor: "#e65c00",
    ctaText: "",
    borderRadius: "25",
    marginLeft: "0",
    marginRight: "20",
    marginBottom: "20",
    ctaIconWATI: false,
    position: "right",
  },
  brandSetting: {
    brandName: "Al Khajista - Shifting Movers",
    brandSubTitle: "undefined",
    brandImg: "https://www.wati.io/wp-content/uploads/2023/04/Wati-logo.svg",
    welcomeText: "Hi there!\nHow can I help you?",
    messageText: "",
    backgroundColor: "#e65c00",
    ctaText: "+971 56 874 1003",
    borderRadius: "25",
    autoShow: false,
    phoneNumber: "+971568741003",
  },
};
s.onload = function () {
  CreateWhatsappChatWidget(options);
};
var x = document.getElementsByTagName("script")[0];
x.parentNode.insertBefore(s, x);
