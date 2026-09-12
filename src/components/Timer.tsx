interface TimerProps {
  time: number;
}

const Timer = ({ time }: TimerProps) => {
  return (
    <div className="text-lg sm:text-6xl font-bold bg-white  rounded-bl-xl p-6 shadow-lg w-auto whitespace-nowrap text-right tabular-nums">
      {time.toFixed(2)}
    </div>
  );
};

export default Timer;
