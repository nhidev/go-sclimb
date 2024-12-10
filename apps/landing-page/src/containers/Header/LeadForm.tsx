'use client';

import { Button, Form, Input, Modal } from 'antd';
import { useAtom } from 'jotai';
import Image from 'next/image';
import { memo, useState } from 'react';
import { leadFormModalAtom } from '@/atoms';
import withTheme from '@/theme';
import { IContacts, Unknown } from '@/types/leadFormType';

const { TextArea } = Input;
declare global {
  interface Window {
    dataLayer: any[];
  }
}

const handlePostRequest = async (data: IContacts): Promise<Unknown | undefined> => {
  try {
    const params = {
      ...data,
      '00N5h00000HZmHD': data['00N5h00000HZmHD'] ? 'yes' : 'no',
    };

    const formData = new URLSearchParams();

    for (const key of Object.keys(params)) {
      formData.append(key, params?.[key as keyof IContacts] as string);
    }

    const response = await fetch(
      `https:/examle.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D5h000008rsSd`,
      {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return (await response.json()) as Unknown;
  } catch (error) {
    console.error('Error making POST request:', error);
    return undefined;
  }
};

const LeadFormN = memo(() => {
  const [form] = Form.useForm();

  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const [leadFormModal, setLeadFormModal] = useAtom(leadFormModalAtom);

  const handleCancel = () => {
    setLeadFormModal(prev => { return { ...prev, open: false } });
    form.resetFields();
    setIsDisabled(true);
  };

  const handleCancelSuccessModal = () => {
    setOpenSuccessModal(false);
  };

  const onFinish = async (values: any) => {
    try {
      setConfirmLoading(true);

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'form_submit',
      });

      // Replace the value of "debugEmail" by a personal email ==> send email on localhost
      const debugValues = {
        debug: 1,
        debugEmail: 'debugEmail',
      };

      const params = {
        oid: '00D5h000008rsSd',
        retURL: 'sclimb.com.vn',
        lead_source: 'WebToLead',
        ...values,
        ...(process.env.NODE_ENV === 'development' && { ...debugValues }),
      };

      await handlePostRequest(params);
    } finally {
      setConfirmLoading(false);
      setOpenSuccessModal(true);
      handleCancel();
    }
  };

  const onValuesChange = (changedValues: Object, allValues: Object) => {
    // Custom values of fields: last_name & company
    const customFields = Object.fromEntries(
      Object.entries(allValues).map(([key, value]) => {
        if (key === 'last_name' || key === 'company') {
          value = value ? value.trim() : value;
        }
        return [key, value];
      })
    );

    const allFieldsFilled = Object.values(customFields).every(value => value !== undefined && value !== '');

    setIsDisabled(!allFieldsFilled);
  };

  const handleSuccessBtn = () => {
    handleCancelSuccessModal();
  }

  return (
    <>
      {withTheme(
        <>
          <Modal
            className="g-modal"
            centered
            open={leadFormModal.open}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            footer={null}
            width={620}
            closeIcon={<Image width={18} height={18} src="/iconsN/Icon_close.svg" alt="close" />}
          >
             {leadFormModal.isDownload ?<Image width={600} height={700} src="/imagesN/menu.jpg" alt="schill menu" />:
             (
              <>
            <div className="form_b-head">
                <h4>WANT TO REACH OUT?</h4>
                <h4>We’re here to help!</h4>
               <p>Feel free to call with any questions or stop by for a tour!</p>
            </div> 
            <Form
              form={form}
              onFinish={onFinish}
              name="leadForm"
              layout="vertical"
              initialValues={{
                '00N5h00000Hb6Vg': '사무실 운영',
              }}
              onValuesChange={onValuesChange}
            >
              <div className="form_b-scroll">
                <Form.Item
                  label="Full name"
                  name="full_name"
                  rules={[{ required: true, message: 'Name format is incorrect.'}]}
                >
                  <Input placeholder="Your name" />
                </Form.Item>              
                <Form.Item
                  label="Phone number"
                  name="phone"
                  rules={[
                    () => {
                      return {
                        validator(_rule, value) {
                          const phoneRegex = new RegExp(/^\d{10}$/);

                          if (phoneRegex.test(value) && !!value) {
                            return Promise.resolve();
                          }
                          return Promise.reject('Please enter the correct phone number');
                        },
                      }
                    },
                  ]}
                >
                  <Input placeholder="0100-000-000" />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: true, type: 'email', message: 'Please enter a valid email address.' }]}
                >
                  <Input placeholder="yourmail@example.com" />
                </Form.Item>
                <Form.Item
                  label="Message"
                  name="message"
                  rules={[{ required: true, message: 'Please enter a message' }]}
                >
                  <TextArea rows={4}  placeholder="Message for us" />
                </Form.Item>
               
              </div>

              <Form.Item shouldUpdate className="form-submit">
                {() => (
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="g-cta-button"
                    icon={<Image width={12} height={10} src="/iconsN/ic-arrow-right.svg" alt="icon" />}
                    disabled={
                      isDisabled || // Check fields when values are changed
                      confirmLoading ||
                      form.getFieldsError().some(({ errors }) => errors.length)
                    }
                    loading={confirmLoading}
                  >
                   Submit
                  </Button>
                )}
              </Form.Item>
            </Form>
            </> )}

          </Modal>

          <Modal
            className="g-modal g-success-modal"
            centered
            open={openSuccessModal}
            onCancel={handleCancelSuccessModal}
            footer={null}
            width={620}
            closeIcon={<Image width={18} height={18} src="/iconsN/Icon_close.svg" alt="close" />}
          >
            <div className="modal_b-head">
              <h3>Your message has been received</h3>
              <p>{`A person in charge will contact you shortly using the contact information you provided.`}</p>
            </div>
            <div className="modal_b-body">
              <Image
                width={255}
                height={247}
                src=' /imagesN/success-img.svg'
                alt="success"
              />
            </div>
            <div className="modal_b-foot">
              <Button
                type="primary"
                className="g-cta-button"
                onClick={() => handleSuccessBtn()}
              >
                Close
              </Button>
            </div>
          </Modal>
        </>
      )}
    </>
  );
});

export default LeadFormN;
