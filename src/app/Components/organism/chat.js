import Image from 'next/image'
import React from 'react'

export default function Chat({props}) {
  return (
    <>
<div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <Image src="https://res.cloudinary.com/djsizjaee/image/upload/v1683010530/samples/erlangga/IMG_2230_ulbomc.jpg" alt='erlanggaAvatar' height={100} width='100' />
    </div>
  </div>
  <div className="chat-header">
    Erlanggaht
    <time className="text-xs opacity-50">Admin</time>
  </div>
  <div className="chat-bubble bg-orange-500">Silahkan order dan  silahkan tinggalkan komentar, terimakasih para seblakers.</div>
  <div className="chat-footer opacity-50">
    Delivered
  </div>
</div>

<div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <Image src={props.image} alt={'avatar'} height={100} width={100} />
    </div>
  </div>
  <div className="chat-header">
    {props.nama}
    <time className="text-xs opacity-50">CS</time>
  </div>
  <div className="chat-bubble bg-oren-skuy">I hate you!</div>
  <div className="chat-footer opacity-50">
    Seen at {props.waktu}
  </div>
</div>

<div className="chat chat-end my-6">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <Image alt={'avatar_consumer'} src={props.image} height={100} width={100} />
    </div>
  </div>
  <div className="chat-header">
    {props.nama}
    <time className="text-xs opacity-50">CS</time>
  </div>
  <div className="chat-bubble bg-oren-skuy">I hate you!</div>
  <div className="chat-footer opacity-50">
    Seen at {props.waktu}
  </div>
</div>
    </>
  )
}
