import Button_order from "../atoms/button_order";

export function Cards_flex ({props}) {
    return (
        <>
        <section className={`lg:flex ${props.flex_reverse} lg:justify-center lg:items-center lg:h-[400px]  flex flex-col-reverse`}>
            <div className='lg:w-1/2 p-5'>
            <h2 className='text-3xl text-neutral-700 dark:text-white text-left lg:text-left hidden sm:inline'>{props.title}</h2>
            <span className='capitalize text-base lg:text-left block text-neutral-700 dark:text-white'>  Resep tradisional. layanan terbaik peralatan modern</span>
            <p className=' mt-7 text-[14px] text-justify lg:text-left text-neutral-500 dark:text-gray-300'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut cumque quisquam quaerat necessitatibus, cupiditate totam doloremque soluta corrupti assumenda magnam pariatur earum quia, optio sequi excepturi quasi quibusdam molestias?</p>
            <section className="my-7 sm:my-16">
            <section className={`${props.btn_hidden}`}> <Button_order text={'ORDER NOW'} Links={'/pages/list_menu'}/> </section>
            <div className={`text-neutral-700 dark:text-white flex items-center gap-2 ${props.know_hidden}`}> Know More 
            <div className="w-20 h-[2px] bg-neutral-700 mt-1 bg-neutral-700 dark:bg-gray-200"></div> </div>
            </section>
            </div>
            <div className='px-5 pb-5 '>
            <h2 className='text-2xl text-neutral-700 dark:text-white text-left lg:text-left sm:hidden pb-6'>We&apos;re proud of our experience</h2>
            <section className={` bg-cover rounde-mmd bg-no-repeat bg-center relative w-full h-[200px] sm:h-[280px] md:w-[520px] md:h-[350px] my-2 shadow-sm ${props.img_class}`}>
            </section>
        </div>
        </section>
        </>
    )
}