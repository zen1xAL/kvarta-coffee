interface LeadFormSuccessProps {
  onReset: () => void;
}

export function LeadFormSuccess({ onReset }: LeadFormSuccessProps) {
  return (
    <div className="py-4 text-left">
      <h3 className="font-serif text-[24px] font-normal italic text-[#ffffff]">
        Спасибо, заявка принята!
      </h3>
      <p className="mt-2 font-sans text-[15px] text-[#b3b3b3]">
        Мы получили ваш заказ и свяжемся с вами в течение 15 минут.
      </p>
      <button onClick={onReset} className="mt-6 font-sans text-[13px] text-[#f6f7f2] underline">
        Отправить еще одну заявку
      </button>
    </div>
  );
}
