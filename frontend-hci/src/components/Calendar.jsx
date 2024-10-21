import React from "react";

function Calendar(){
    return(
    <div className="mb-4">
    <div classNameName="flex-col m-5">
        <div className="border-4 rounded-lg border-[#E85A4F] grid grid-cols-2 p-5">
            <h1 className="text-[#E98074] text-4xl bold col-span-1">
                Lorem Ipsum
            </h1>
            <div className="grid grid-rows-2 grid-cols-2">
                <h1 className="text-[#E98074] text-3xl bold text-center col-span-2 col-start-2">
                    Aaron David
                </h1>
                <button className="items-end bg-[#E85A4F] col-span-2 col-start-2 text-white">Lock-in slots.</button>
            </div>
        </div>
        <div className="border-4 rounded-lg border-[#E85A4F] grid grid-cols-7 p-5 bg-[#E98074] text-white overflow-auto">
            <div className="border-white border-2 p-10 rounded-l m-1 text-center text-2xl">
                Sunday
            </div>
            <div className="border-white border-2 p-10 rounded-l m-1 text-center text-2xl">
                Monday
            </div>
            <div className="border-white border-2 p-10 rounded-l m-1 text-center text-2xl">
                Tuesday
            </div>
            <div className="border-white border-2 p-10 rounded-l m-1 text-center text-2xl">
                Wednesday
            </div>
            <div className="border-white border-2 p-10 rounded-l m-1 text-center text-2xl">
                Thrusday
            </div>
            <div className="border-white border-2 p-10 rounded-l m-1 text-center text-2xl">
                Friday
            </div>
            <div className="border-white border-2 p-10 rounded-l m-1 text-center text-2xl">
                Saturday
            </div>
            <div className="border-white border-2 p-1 rounded-l m-1  text-center grid grid-cols-2 grid-rows-2">
                <div className="col-span-2  text-2xl">
                    28
                </div>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Morning
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Night
                </button>
            </div>
            <div className="border-white border-2 p-1 rounded-l m-1  text-xs text-center grid grid-cols-3 grid-rows-2">
                <div className="col-span-3  text-2xl">
                    29
                </div>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Morning
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Afternoon
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Night
                </button>
            </div>
            <div className="border-white border-2 p-1 rounded-l m-1  text-xs text-center grid grid-cols-2 grid-rows-3">
                <div className="col-span-2  text-2xl">
                    30
                </div>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Early Morning
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Morning
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Night
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Night
                </button>
            </div>
            <div className="border-white border-2 p-1 rounded-l m-1  text-xs text-center grid grid-cols-3 grid-rows-3">
                <div className="col-span-3  text-2xl">
                    31
                </div>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Past Mid-Night
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Early Morning
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Morning
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Afternoon
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Evening
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Night
                </button>
            </div>
            <div className="border-white border-2 p-10 rounded-l m-1 text-center text-2xl bg-[#E85A4F]  text-[black]">
                1
            </div>
            <div className="border-white border-2 p-10 rounded-l m-1 text-center text-2xl bg-[#E85A4F]  text-[black]">
                2
            </div>
            <div className="border-white border-2 p-10 rounded-l m-1 text-center text-2xl bg-[#E85A4F]  text-[black]">
                3
            </div>
            <div className="col-span-7 text-4xl text-center bg-[#E85A4F] text-white border-4 borde-white rounded-full">AUGUST</div>
            <div className="border-white border-2 p-10 rounded-l m-1 text-center text-2xl bg-[#E85A4F] text-[black]">
                28
            </div>
            <div className="border-white border-2 p-10 rounded-l m-1 text-center text-2xl bg-[#E85A4F]  text-[black]">
                29
            </div>
            <div className="border-white border-2 p-10 rounded-l m-1 text-center text-2xl bg-[#E85A4F]  text-[black]">
                30
            </div>
            <div className="border-white border-2 p-10 rounded-l m-1 text-center text-2xl bg-[#E85A4F]  text-[black]">
                31
            </div>
            <div className="border-white border-2 p-1 rounded-l m-1  text-xs text-center grid grid-cols-4 grid-rows-3">
                <div className="col-span-4  text-2xl">
                    1
                </div>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    1
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    2
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    3
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    4
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    5
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    6
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    7
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    8
                </button>
            </div>
            <div className="border-white border-2 p-1 rounded-l m-1  text-center grid grid-cols-2 grid-rows-2">
                <div className="col-span-2  text-2xl">
                    2
                </div>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Morning
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Night
                </button>
            </div>
            <div className="border-white border-2 p-1 rounded-l m-1  text-center grid grid-cols-2 grid-rows-2">
                <div className="col-span-2  text-2xl">
                    3
                </div>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Morning
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Night
                </button>
            </div>
            <div className="border-white border-2 p-4 rounded-l m-1  text-center grid grid-cols-2 grid-rows-2">
                <div className="col-span-2  text-2xl">
                    4
                </div>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Morning
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Night
                </button>
            </div>
            <div className="border-white border-2 p-4 rounded-l m-1  text-center grid grid-cols-2 grid-rows-2">
                <div className="col-span-2  text-2xl">
                    5
                </div>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Morning
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Night
                </button>
            </div>
            <div className="border-white border-2 p-4 rounded-l m-1  text-center grid grid-cols-2 grid-rows-2">
                <div className="col-span-2  text-2xl">
                    6
                </div>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Morning
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Night
                </button>
            </div>
            <div className="border-white border-2 p-4 rounded-l m-1  text-center grid grid-cols-2 grid-rows-2">
                <div className="col-span-2  text-2xl">
                    7
                </div>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Morning
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Night
                </button>
            </div>
            <div className="border-white border-2 p-4 rounded-l m-1  text-center grid grid-cols-2 grid-rows-2">
                <div className="col-span-2  text-2xl">
                    8
                </div>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Morning
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Night
                </button>
            </div>
            <div className="border-white border-2 p-4 rounded-l m-1  text-center grid grid-cols-2 grid-rows-2">
                <div className="col-span-2  text-2xl">
                    9
                </div>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Morning
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Night
                </button>
            </div>
            <div className="border-white border-2 p-4 rounded-l m-1  text-center grid grid-cols-2 grid-rows-2">
                <div className="col-span-2  text-2xl">
                    10
                </div>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Morning
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Night
                </button>
            </div>
            <div className="border-white border-2 p-4 rounded-l m-1  text-center grid grid-cols-2 grid-rows-2">
                <div className="col-span-2  text-2xl">
                    11
                </div>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Morning
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Night
                </button>
            </div>
            <div className="border-white border-2 p-4 rounded-l m-1  text-center grid grid-cols-2 grid-rows-2">
                <div className="col-span-2  text-2xl">
                    12
                </div>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Morning
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Night
                </button>
            </div>
            <div className="border-white border-2 p-4 rounded-l m-1  text-center grid grid-cols-2 grid-rows-2">
                <div className="col-span-2  text-2xl">
                    13
                </div>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Morning
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Night
                </button>
            </div>
            <div className="border-white border-2 p-4 rounded-l m-1  text-center grid grid-cols-2 grid-rows-2">
                <div className="col-span-2  text-2xl">
                    14
                </div>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Morning
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Night
                </button>
            </div>
            <div className="border-white border-2 p-4 rounded-l m-1  text-center grid grid-cols-2 grid-rows-2">
                <div className="col-span-2  text-2xl">
                    15
                </div>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Morning
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Night
                </button>
            </div>
            <div className="border-white border-2 p-4 rounded-l m-1  text-center grid grid-cols-2 grid-rows-2">
                <div className="col-span-2  text-2xl">
                    16
                </div>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Morning
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Night
                </button>
            </div>
            <div className="border-white border-2 p-4 rounded-l m-1  text-center grid grid-cols-2 grid-rows-2">
                <div className="col-span-2  text-2xl">
                    17
                </div>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Morning
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Night
                </button>
            </div>
            <div className="border-white border-2 p-4 rounded-l m-1  text-center grid grid-cols-2 grid-rows-2">
                <div className="col-span-2  text-2xl">
                    18
                </div>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Morning
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Night
                </button>
            </div>
            <div className="border-white border-2 p-4 rounded-l m-1  text-center grid grid-cols-2 grid-rows-2">
                <div className="col-span-2  text-2xl">
                    19
                </div>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Morning
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Night
                </button>
            </div>
            <div className="border-white border-2 p-4 rounded-l m-1  text-center grid grid-cols-2 grid-rows-2">
                <div className="col-span-2  text-2xl">
                    20
                </div>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Morning
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Night
                </button>
            </div>
            <div className="border-white border-2 p-4 rounded-l m-1  text-center grid grid-cols-2 grid-rows-2">
                <div className="col-span-2  text-2xl">
                    21
                </div>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Morning
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Night
                </button>
            </div>
            <div className="border-white border-2 p-4 rounded-l m-1  text-center grid grid-cols-2 grid-rows-2">
                <div className="col-span-2  text-2xl">
                    22
                </div>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Morning
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Night
                </button>
            </div>
            <div className="border-white border-2 p-4 rounded-l m-1  text-center grid grid-cols-2 grid-rows-2">
                <div className="col-span-2  text-2xl">
                    23
                </div>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Morning
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Night
                </button>
            </div>
            <div className="border-white border-2 p-4 rounded-l m-1  text-center grid grid-cols-2 grid-rows-2">
                <div className="col-span-2  text-2xl">
                    24
                </div>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Morning
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Night
                </button>
            </div>
            <div className="border-white border-2 p-4 rounded-l m-1  text-center grid grid-cols-2 grid-rows-2">
                <div className="col-span-2  text-2xl">
                    25
                </div>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Morning
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Night
                </button>
            </div>
            <div className="border-white border-2 p-4 rounded-l m-1  text-center grid grid-cols-2 grid-rows-2">
                <div className="col-span-2  text-2xl">
                    26
                </div>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Morning
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Night
                </button>
            </div>
            <div className="border-white border-2 p-4 rounded-l m-1  text-center grid grid-cols-2 grid-rows-2">
                <div className="col-span-2  text-2xl">
                    27
                </div>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Morning
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Night
                </button>
            </div>
            <div className="border-white border-2 p-4 rounded-l m-1  text-center grid grid-cols-2 grid-rows-2">
                <div className="col-span-2  text-2xl">
                    28
                </div>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Morning
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Night
                </button>
            </div>
            <div className="border-white border-2 p-4 rounded-l m-1  text-center grid grid-cols-2 grid-rows-2">
                <div className="col-span-2  text-2xl">
                    29
                </div>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Morning
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Night
                </button>
            </div>
            <div className="border-white border-2 p-4 rounded-l m-1  text-center grid grid-cols-2 grid-rows-2">
                <div className="col-span-2  text-2xl">
                    30
                </div>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Morning
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Night
                </button>
            </div>
            <div className="border-white border-2 p-4 rounded-l m-1  text-center grid grid-cols-2 grid-rows-2">
                <div className="col-span-2  text-2xl">
                    31
                </div>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Morning
                </button>
                <button className="bg-[white] text-[#E85A4F] rounded-full">
                    Night
                </button>
            </div>
        </div>
    </div>
    </div>
    );
}

export default Calendar;