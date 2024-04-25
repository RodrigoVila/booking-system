import { ServiceType } from 'shared-types';

export const Service = ({
  title,
  description,
  options,
  imgSrc,
}: ServiceType) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{description}</p>
      {options.map((option) => (
        <div key={`${option.duration}-${option.price}`}>
          <div>{option.duration}</div>
          <div>{option.price}</div>
        </div>
      ))}
      <img src={imgSrc} />
    </article>
  );
};
