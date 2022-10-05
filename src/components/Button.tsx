import { ButtonContainer, ButtonVariant } from './Button.styles';


interface ButtonProps {
    variant?: ButtonVariant;
}

function Button({ variant = 'primary' }: ButtonProps) {
    return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}

export { Button }