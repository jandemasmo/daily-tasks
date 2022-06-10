import "./FormRegister.css";
import {useState} from "react";
import {Navigate} from "react-router-dom";
import UsersService from "../../services/usersService";

export function FormRegister() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const [messageError, setMessageError] = useState();

    const HandleSubmit = async (event)=>{
        event.preventDefault();
        try {
            const user = await UsersService.register({name: name, email: email, password: password});
            setRedirectToLogin(true)
        } catch (error) {
            for(let key in error.response.data.message){
                setMessageError(error.response.data.message[key])
            }
            setError(true)
        }
    }

    if(redirectToLogin){
        return <Navigate to="/login"/>
    }

    return (
        <div className="content">
            <div className="content--form">
                <form onSubmit={HandleSubmit} className="form--sign--in--out" id="form_register">
                    <div className="brand">
                        <a href="#">
                            <svg width="1316" height="203" viewBox="0 0 1316 203" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M300.2 136.6C301.667 136.733 303.333 136.867 305.2 137C307.2 137 309.533 137 312.2 137C327.8 137 339.333 133.067 346.8 125.2C354.4 117.333 358.2 106.467 358.2 92.6C358.2 78.0667 354.6 67.0667 347.4 59.6C340.2 52.1333 328.8 48.4 313.2 48.4C311.067 48.4 308.867 48.4667 306.6 48.6C304.333 48.6 302.2 48.7333 300.2 49V136.6ZM390.4 92.6C390.4 104.6 388.533 115.067 384.8 124C381.067 132.933 375.733 140.333 368.8 146.2C362 152.067 353.667 156.467 343.8 159.4C333.933 162.333 322.867 163.8 310.6 163.8C305 163.8 298.467 163.533 291 163C283.533 162.6 276.2 161.667 269 160.2V25.2C276.2 23.8667 283.667 23 291.4 22.6C299.267 22.0667 306 21.8 311.6 21.8C323.467 21.8 334.2 23.1333 343.8 25.8C353.533 28.4667 361.867 32.6667 368.8 38.4C375.733 44.1333 381.067 51.4667 384.8 60.4C388.533 69.3333 390.4 80.0667 390.4 92.6ZM454.661 141.2C457.594 141.2 460.394 141.133 463.061 141C465.728 140.867 467.861 140.667 469.461 140.4V117.8C468.261 117.533 466.461 117.267 464.061 117C461.661 116.733 459.461 116.6 457.461 116.6C454.661 116.6 451.994 116.8 449.461 117.2C447.061 117.467 444.928 118.067 443.061 119C441.194 119.933 439.728 121.2 438.661 122.8C437.594 124.4 437.061 126.4 437.061 128.8C437.061 133.467 438.594 136.733 441.661 138.6C444.861 140.333 449.194 141.2 454.661 141.2ZM452.261 54C461.061 54 468.394 55 474.261 57C480.128 59 484.794 61.8667 488.261 65.6C491.861 69.3333 494.394 73.8667 495.861 79.2C497.328 84.5333 498.061 90.4667 498.061 97V159C493.794 159.933 487.861 161 480.261 162.2C472.661 163.533 463.461 164.2 452.661 164.2C445.861 164.2 439.661 163.6 434.061 162.4C428.594 161.2 423.861 159.267 419.861 156.6C415.861 153.8 412.794 150.2 410.661 145.8C408.528 141.4 407.461 136 407.461 129.6C407.461 123.467 408.661 118.267 411.061 114C413.594 109.733 416.928 106.333 421.061 103.8C425.194 101.267 429.928 99.4667 435.261 98.4C440.594 97.2 446.128 96.6 451.861 96.6C455.728 96.6 459.128 96.8 462.061 97.2C465.128 97.4667 467.594 97.8667 469.461 98.4V95.6C469.461 90.5333 467.928 86.4667 464.861 83.4C461.794 80.3333 456.461 78.8 448.861 78.8C443.794 78.8 438.794 79.2 433.861 80C428.928 80.6667 424.661 81.6667 421.061 83L417.261 59C418.994 58.4667 421.128 57.9333 423.661 57.4C426.328 56.7333 429.194 56.2 432.261 55.8C435.328 55.2667 438.528 54.8667 441.861 54.6C445.328 54.2 448.794 54 452.261 54ZM554.808 162H525.008V56.8H554.808V162ZM557.608 26.4C557.608 31.8667 555.808 36.2 552.208 39.4C548.741 42.4667 544.608 44 539.808 44C535.008 44 530.808 42.4667 527.208 39.4C523.741 36.2 522.008 31.8667 522.008 26.4C522.008 20.9333 523.741 16.6667 527.208 13.6C530.808 10.4 535.008 8.79999 539.808 8.79999C544.608 8.79999 548.741 10.4 552.208 13.6C555.808 16.6667 557.608 20.9333 557.608 26.4ZM624.82 164C616.154 163.867 609.087 162.933 603.62 161.2C598.287 159.467 594.02 157.067 590.82 154C587.754 150.8 585.62 147 584.42 142.6C583.354 138.067 582.82 133 582.82 127.4V11.6L612.62 6.8V121.4C612.62 124.067 612.82 126.467 613.22 128.6C613.62 130.733 614.354 132.533 615.42 134C616.62 135.467 618.287 136.667 620.42 137.6C622.554 138.533 625.42 139.133 629.02 139.4L624.82 164ZM737.353 56.8C731.353 77.0667 725.086 96.0667 718.553 113.8C712.02 131.533 704.886 148.733 697.153 165.4C694.353 171.4 691.553 176.467 688.753 180.6C685.953 184.867 682.886 188.333 679.553 191C676.22 193.8 672.42 195.8 668.153 197C664.02 198.333 659.153 199 653.553 199C648.886 199 644.553 198.533 640.553 197.6C636.686 196.8 633.486 195.867 630.953 194.8L636.153 171C639.22 172.067 641.953 172.8 644.353 173.2C646.753 173.6 649.286 173.8 651.953 173.8C657.286 173.8 661.353 172.333 664.153 169.4C667.086 166.6 669.553 162.667 671.553 157.6C664.753 144.267 657.953 129.333 651.153 112.8C644.353 96.1333 637.953 77.4667 631.953 56.8H663.553C664.886 62 666.42 67.6667 668.153 73.8C670.02 79.8 671.953 85.9333 673.953 92.2C675.953 98.3333 677.953 104.333 679.953 110.2C682.086 116.067 684.086 121.4 685.953 126.2C687.686 121.4 689.486 116.067 691.353 110.2C693.22 104.333 695.02 98.3333 696.753 92.2C698.62 85.9333 700.353 79.8 701.953 73.8C703.686 67.6667 705.22 62 706.553 56.8H737.353ZM906.175 23.4V50H864.375V162H833.175V50H791.375V23.4H906.175ZM949.388 141.2C952.321 141.2 955.121 141.133 957.788 141C960.454 140.867 962.588 140.667 964.188 140.4V117.8C962.988 117.533 961.188 117.267 958.788 117C956.388 116.733 954.188 116.6 952.188 116.6C949.388 116.6 946.721 116.8 944.188 117.2C941.788 117.467 939.654 118.067 937.788 119C935.921 119.933 934.454 121.2 933.388 122.8C932.321 124.4 931.788 126.4 931.788 128.8C931.788 133.467 933.321 136.733 936.388 138.6C939.588 140.333 943.921 141.2 949.388 141.2ZM946.988 54C955.788 54 963.121 55 968.988 57C974.854 59 979.521 61.8667 982.988 65.6C986.588 69.3333 989.121 73.8667 990.588 79.2C992.054 84.5333 992.788 90.4667 992.788 97V159C988.521 159.933 982.588 161 974.988 162.2C967.388 163.533 958.188 164.2 947.388 164.2C940.588 164.2 934.388 163.6 928.788 162.4C923.321 161.2 918.588 159.267 914.588 156.6C910.588 153.8 907.521 150.2 905.388 145.8C903.254 141.4 902.188 136 902.188 129.6C902.188 123.467 903.388 118.267 905.788 114C908.321 109.733 911.654 106.333 915.788 103.8C919.921 101.267 924.654 99.4667 929.988 98.4C935.321 97.2 940.854 96.6 946.587 96.6C950.454 96.6 953.854 96.8 956.788 97.2C959.854 97.4667 962.321 97.8667 964.188 98.4V95.6C964.188 90.5333 962.654 86.4667 959.588 83.4C956.521 80.3333 951.188 78.8 943.588 78.8C938.521 78.8 933.521 79.2 928.588 80C923.654 80.6667 919.388 81.6667 915.788 83L911.988 59C913.721 58.4667 915.854 57.9333 918.388 57.4C921.054 56.7333 923.921 56.2 926.988 55.8C930.054 55.2667 933.254 54.8667 936.588 54.6C940.054 54.2 943.521 54 946.988 54ZM1049.93 140.6C1055.4 140.6 1059.27 140.067 1061.53 139C1063.8 137.933 1064.93 135.867 1064.93 132.8C1064.93 130.4 1063.47 128.333 1060.53 126.6C1057.6 124.733 1053.13 122.667 1047.13 120.4C1042.47 118.667 1038.2 116.867 1034.33 115C1030.6 113.133 1027.4 110.933 1024.73 108.4C1022.07 105.733 1020 102.6 1018.53 99C1017.07 95.4 1016.33 91.0667 1016.33 86C1016.33 76.1333 1020 68.3333 1027.33 62.6C1034.67 56.8667 1044.73 54 1057.53 54C1063.93 54 1070.07 54.6 1075.93 55.8C1081.8 56.8667 1086.47 58.0667 1089.93 59.4L1084.73 82.6C1081.27 81.4 1077.47 80.3333 1073.33 79.4C1069.33 78.4667 1064.8 78 1059.73 78C1050.4 78 1045.73 80.6 1045.73 85.8C1045.73 87 1045.93 88.0667 1046.33 89C1046.73 89.9333 1047.53 90.8667 1048.73 91.8C1049.93 92.6 1051.53 93.5333 1053.53 94.6C1055.67 95.5333 1058.33 96.6 1061.53 97.8C1068.07 100.2 1073.47 102.6 1077.73 105C1082 107.267 1085.33 109.8 1087.73 112.6C1090.27 115.267 1092 118.267 1092.93 121.6C1094 124.933 1094.53 128.8 1094.53 133.2C1094.53 143.6 1090.6 151.467 1082.73 156.8C1075 162.133 1064 164.8 1049.73 164.8C1040.4 164.8 1032.6 164 1026.33 162.4C1020.2 160.8 1015.93 159.467 1013.53 158.4L1018.53 134.2C1023.6 136.2 1028.8 137.8 1034.13 139C1039.47 140.067 1044.73 140.6 1049.93 140.6ZM1146.6 94.8C1149.54 91.6 1152.54 88.2667 1155.6 84.8C1158.8 81.3333 1161.87 77.9333 1164.8 74.6C1167.74 71.1333 1170.47 67.8667 1173 64.8C1175.67 61.7333 1177.94 59.0667 1179.8 56.8H1215.2C1208.14 64.9333 1201.2 72.7333 1194.4 80.2C1187.74 87.5333 1180.4 95.1333 1172.4 103C1176.4 106.6 1180.54 110.933 1184.8 116C1189.07 120.933 1193.2 126.067 1197.2 131.4C1201.2 136.733 1204.87 142.067 1208.2 147.4C1211.54 152.733 1214.34 157.6 1216.6 162H1182.4C1180.27 158.533 1177.8 154.733 1175 150.6C1172.34 146.333 1169.47 142.133 1166.4 138C1163.34 133.733 1160.07 129.667 1156.6 125.8C1153.27 121.933 1149.94 118.667 1146.6 116V162H1116.8V11.6L1146.6 6.8V94.8ZM1262.83 140.6C1268.29 140.6 1272.16 140.067 1274.43 139C1276.69 137.933 1277.83 135.867 1277.83 132.8C1277.83 130.4 1276.36 128.333 1273.43 126.6C1270.49 124.733 1266.03 122.667 1260.03 120.4C1255.36 118.667 1251.09 116.867 1247.23 115C1243.49 113.133 1240.29 110.933 1237.63 108.4C1234.96 105.733 1232.89 102.6 1231.43 99C1229.96 95.4 1229.23 91.0667 1229.23 86C1229.23 76.1333 1232.89 68.3333 1240.23 62.6C1247.56 56.8667 1257.63 54 1270.43 54C1276.83 54 1282.96 54.6 1288.83 55.8C1294.69 56.8667 1299.36 58.0667 1302.83 59.4L1297.63 82.6C1294.16 81.4 1290.36 80.3333 1286.23 79.4C1282.23 78.4667 1277.69 78 1272.63 78C1263.29 78 1258.63 80.6 1258.63 85.8C1258.63 87 1258.83 88.0667 1259.23 89C1259.63 89.9333 1260.43 90.8667 1261.63 91.8C1262.83 92.6 1264.43 93.5333 1266.43 94.6C1268.56 95.5333 1271.23 96.6 1274.43 97.8C1280.96 100.2 1286.36 102.6 1290.63 105C1294.89 107.267 1298.23 109.8 1300.63 112.6C1303.16 115.267 1304.89 118.267 1305.83 121.6C1306.89 124.933 1307.43 128.8 1307.43 133.2C1307.43 143.6 1303.49 151.467 1295.63 156.8C1287.89 162.133 1276.89 164.8 1262.63 164.8C1253.29 164.8 1245.49 164 1239.23 162.4C1233.09 160.8 1228.83 159.467 1226.43 158.4L1231.43 134.2C1236.49 136.2 1241.69 137.8 1247.03 139C1252.36 140.067 1257.63 140.6 1262.83 140.6Z"
                                    fill="#3E3D3D" />
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M70.9068 138.2C101.676 138.2 126.619 111.606 126.619 78.8C126.619 45.9942 101.676 19.4 70.9068 19.4C40.1376 19.4 15.1942 45.9942 15.1942 78.8C15.1942 111.606 40.1376 138.2 70.9068 138.2ZM70.9069 119.3C91.8859 119.3 108.893 101.167 108.893 78.8C108.893 56.4324 91.8859 38.3 70.9069 38.3C49.9279 38.3 32.9211 56.4324 32.9211 78.8C32.9211 101.167 49.9279 119.3 70.9069 119.3Z"
                                    fill="#C10FFF" />
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M182.332 138.2C213.101 138.2 238.045 111.606 238.045 78.7999C238.045 45.9942 213.101 19.3999 182.332 19.3999C151.563 19.3999 126.619 45.9942 126.619 78.7999C126.619 111.606 151.563 138.2 182.332 138.2ZM182.332 119.3C203.311 119.3 220.318 101.167 220.318 78.7999C220.318 56.4324 203.311 38.2999 182.332 38.2999C161.353 38.2999 144.346 56.4324 144.346 78.7999C144.346 101.167 161.353 119.3 182.332 119.3Z"
                                    fill="#C10FFF" />
                                <ellipse cx="70.9069" cy="78.7999" rx="15.1943" ry="16.2" fill="#C10FFF" />
                                <ellipse cx="182.332" cy="78.7999" rx="15.1943" ry="16.2" fill="#C10FFF" />
                                <path d="M126.619 203L84.9502 140.225H168.289L126.619 203Z" fill="#C10FFF" />
                                <path d="M126.619 78.8L168.288 141.575H84.9502L126.619 78.8Z" fill="#C10FFF" />
                                <path d="M3.00316 24.1402L37.0067 32.1057L31.8049 44.9926L3.00316 24.1402Z" fill="#C10FFF" />
                                <path d="M20.7299 21.4403L54.7334 29.4058L49.5316 42.2927L20.7299 21.4403Z" fill="#C10FFF" />
                                <path d="M249.997 24.1402L215.993 32.1057L221.195 44.9926L249.997 24.1402Z" fill="#C10FFF" />
                                <path d="M232.27 21.4403L198.266 29.4058L203.468 42.2927L232.27 21.4403Z" fill="#C10FFF" />
                            </svg>

                        </a>
                    </div>
                    <div className="input--content">
                        <input type="text" placeholder="Nome" name="name" id="name" value={name} onChange={event => setName(event.target.value)} />
                        <input type="email" placeholder="E-mail" name="email" id="email" value={email} onChange={event => setEmail(event.target.value)}/>
                        <input type="password" placeholder="Senha" name="password" id="password" value={password} onChange={event => setPassword(event.target.value)} />
                        <button className="button-default button_form_register" >Cadastrar</button>
                        {error && <div className="input--message">{messageError}</div>}
                    </div>
                </form>
            </div>
        </div>
    )
}