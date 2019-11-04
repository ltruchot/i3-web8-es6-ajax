export const spread = () => {
    const o1 = { toto: "titi" };
    const o2 = {...o1};
    const o3 = { 
        tutu: "tete", 
        ...o2
    };
    console.log(o1, o2, o3);

    const a1 = [1, 2, 3];
    const a2 = [...a1];
    console.log(a1, a2);

    // clone deep
    const o4 = JSON.parse(
        JSON.stringify(o3)
    );
    console.log(o4);   
}