
import * as gameXucXacConstants from '../constants/gameXucXacConstants'
const initialState={
    mangXucXac:[
        {diem:1, hinhAnh:'./images/game-xuc-xac/1.png'},
        {diem:1, hinhAnh:'./images/game-xuc-xac/1.png'},
        {diem:1, hinhAnh:'./images/game-xuc-xac/1.png'},
    ],
    taiXiu:true, //true là tài (3 đến 11), false là xỉu khi lớn hơn 12 điểm
    soBanThang:0,
    tongSoBanChoi:0,
}
const gameXucXacReducer=(state=initialState, {type,payload})=>{
    switch (type) {
        case gameXucXacConstants.CHON_TAI_XIU:{
            console.log(payload)
            return state;
            // return{...state,taiXiu:payload} ;
        }
        case gameXucXacConstants.DAT_CUOC:{
            //tăng tổng số bàn chơi
            state.tongSoBanChoi+=1;

            //random xuc xac
            const mangXucXacRandom=[];
            for( let i=0;i<3;i++){
                const randomNum=Math.floor(Math.random()*6)+1;
                const xucxacRandom={
                    diem: randomNum,
                    hinhAnh:`./images/game-xuc-xac/${randomNum}.png`,
                };
                mangXucXacRandom.push(xucxacRandom)
            }

            //Tong diem xuc xac
            const tongDiem=mangXucXacRandom.reduce((tongDiem,xucXac)=>{
                return tongDiem+=xucXac.diem;
            },0)

            //Kiểm tra số bàn thắng
            if((state.taiXiu && tongDiem<=11)|| (!state.taiXiu &&tongDiem>=12)){
                state.soBanThang+=1;
            }
            return {...state,mangXucXac:mangXucXacRandom};
        }
        default:
            return state
    }
}
export default gameXucXacReducer;