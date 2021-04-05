import AsyncStorage from '@react-native-async-storage/async-storage';

export function getItemFromAsync (storageName) {
    AsyncStorage.getItem(storageName, (err, result) => {
        console.log(result);
    });
};

export const setItemToAsync = (storageName, todo) => {
    AsyncStorage.getItem(storageName, (err, result) => {
        if(err) {
            console.log("에러 폴더가 존재하지 않습니다.")
        }
        else {
            //가져온 json파일
            var JsonFile = JSON.parse(result);
            JsonFile.push(todo);
            AsyncStorage.setItem(storageName,JSON.stringify(JsonFile), () => {
                console.log(JSON.stringify(JsonFile));
                console.log('저장 완료');
            });
        }
    });
    
};

export const deleteItemToAsync = (storageName, del) => {
    AsyncStorage.getItem(storageName, (err, result) => {
        if(err) {
            console.log("에러 폴더가 존재하지 않습니다.")
        }
        else {
            var JsonFile = JSON.parse(result);
            for(let i=0; i<JsonFile.length;i++) {
                if(JsonFile[i] === del) {
                    Array.splice(i,1);
                    i--;
                }
            }
            AsyncStorage.setItem(storageName,JSON.stringify(JsonFile), () => {
                console.log(JSON.stringify(JsonFile));
                console.log('삭제 및 저장 완료');
            });
        }
    });

}