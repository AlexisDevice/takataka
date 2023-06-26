import { ActionIcon, Group, useMantineTheme, Tooltip } from '@mantine/core';
import { BrandGithub, Paint } from 'tabler-icons-react';
import ThemePicker from './ThemePicker';
import { useDisclosure } from '@mantine/hooks';

interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => {
    const theme = useMantineTheme();
    const [showPicker, { open, close }] = useDisclosure();
    return (
        <Group mt={'auto'} py='md' position='apart'>
            <Tooltip label='GitHub'>
                <ActionIcon
                    component='a'
                    href='https://github.com/devRauLuis/takataka'
                    target='_blank'
                    rel='noopener'
                    size='sm'
                    color='tertiary'
                >
                    <BrandGithub size={48} strokeWidth={2} />
                </ActionIcon>
            </Tooltip>
            <ThemePicker show={showPicker} close={close}>
                <Tooltip label='Change theme'>
                    <ActionIcon size='sm' color='tertiary' onClick={open}>
                        <Paint size={48} strokeWidth={2} />
                    </ActionIcon>
                </Tooltip>
            </ThemePicker>
        </Group>
    );
};

export default Footer;
