import * as React from "react";

function Icon(props) {
  return (
    <svg viewBox="0 0 4.835 7.924" {...props}>
      <path
        d="M1.972 7.286c-.176-.351-.53-1.05-.786-1.555l-.465-.917.102-.224c.189-.412.412-1.455.412-1.922v-.135l.098.151c.14.217.262.32.532.447.43.202.885.17 1.294-.091.195-.126.238-.171.4-.417l.117-.18.02.316c.037.585.252 1.475.453 1.876l.083.166-.21.396-.336.634c-.07.13-.23.437-.357.68-.608 1.17-.74 1.413-.769 1.413-.018 0-.031-.298-.031-.699 0-.656.005-.705.071-.795.09-.12.074-.232-.042-.319a.214.214 0 00-.33.249c.018.052.055.103.082.114.04.015.049.145.049.734 0 .452-.013.716-.034.716-.019 0-.178-.287-.354-.638zm.265-1.413l.106-.672c.09-.57.11-.667.132-.643.007.007.046.25.086.541.04.29.09.608.108.706l.035.179h.497l-.077-.298c-.08-.31-.281-1.072-.31-1.173-.015-.053 0-.052.156.013.095.04.18.065.189.056.014-.014-.063-.439-.106-.58-.025-.083-.043-.079-.316.076a1.548 1.548 0 01-.279.136c-.021 0-.16-.068-.307-.15-.147-.084-.274-.141-.281-.128-.012.02-.096.36-.143.576-.02.098.016.096.224-.01.104-.052.17-.07.17-.045 0 .037-.046.207-.306 1.136-.053.187-.089.351-.08.365.008.015.12.026.25.026h.235zm-.113-2.766a1.34 1.34 0 01-.875-.703c-.076-.15-.095-.24-.108-.513-.02-.392-.031-.385.361-.226.498.201.96.344 1.003.31.023-.019.148-.072.28-.12.13-.046.291-.108.357-.136a3.98 3.98 0 01.33-.117l.212-.065.023.15c.129.861-.753 1.652-1.583 1.42zm.082-1.342a19.005 19.005 0 00-.63-.207C1.013 1.383-.035.976 0 .948.102.865 2.144.057 2.387.001c.087-.02.37.083 1.337.483.161.066.302.12.314.12.011 0 .102.037.2.082.1.045.218.092.265.106.126.038.35.155.331.174a1.973 1.973 0 01-.233.098c-.12.044-.34.129-.49.188-.332.13-1.654.578-1.701.576-.019 0-.11-.03-.204-.064z"
        fill="#576b83"
      />
      <path
        d="M1.21 1.563c-.09-.006-.081.083-.07.328.014.273.033.364.11.513a1.34 1.34 0 001.096.74l-.089-.065a2.758 2.758 0 01-.328-.292 1.534 1.534 0 01-.292-.411 1.816 1.816 0 01-.135-.473c-.018-.125-.016-.2-.024-.248-.131-.053-.217-.088-.268-.092z"
        fillOpacity={0.471}
      />
      <path
        d="M.366.78c-.2.084-.34.148-.365.167-.035.028.954.413 1.526.595.03-.047.076-.118.099-.173.025-.063.019-.102-.242-.22A7.752 7.752 0 00.366.78zM3.676 2.444l-.117.179c-.162.246-.205.291-.4.417a1.293 1.293 0 01-1.294.09c-.27-.127-.392-.229-.532-.446l-.097-.151v.135c0 .467-.224 1.51-.413 1.922l-.102.224.465.917c.257.504.61 1.204.786 1.555.175.351.334.638.353.638.021 0 .034-.263.034-.716 0-.59-.009-.719-.049-.734-.027-.01-.064-.062-.082-.114a.214.214 0 01.33-.249c.116.087.131.198.042.319-.067.09-.071.14-.071.795 0 .4.013.7.031.7.03 0 .161-.244.77-1.413a90.965 90.965 0 01.693-1.315l.21-.396-.084-.166c-.201-.401-.416-1.291-.453-1.876zm-1.803 1.49c.02-.004.14.051.278.13.148.082.286.15.307.15.022 0 .147-.061.28-.136.272-.155.29-.16.315-.077.043.142.12.567.106.581-.009.01-.094-.016-.189-.056-.156-.065-.171-.066-.156-.013.029.101.23.863.31 1.173l.077.298h-.497l-.035-.179a20.18 20.18 0 01-.108-.706 7.41 7.41 0 00-.086-.541c-.023-.024-.043.073-.132.643l-.106.672-.017.111h-.235c-.13 0-.242-.011-.25-.026-.009-.014.027-.178.08-.365.26-.929.306-1.1.306-1.136 0-.024-.066-.007-.17.046-.208.105-.245.107-.224.009a8.508 8.508 0 01.146-.578z"
        fill="#2e3945"
      />
    </svg>
  );
}

const MemoIcon = React.memo(Icon);
export default MemoIcon;